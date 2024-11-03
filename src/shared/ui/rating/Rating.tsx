"use client";

import {
  FC,
  KeyboardEvent,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import cn from "classnames";
import { RatingProps } from "./Rating.props";
import StarIcon from "./star-rating.svg";

import styles from "./Rating.module.scss";

export const Rating: FC<RatingProps> = ({
  rating,
  setRating,
  isEditable = false,
  ...otherProps
}) => {
  const [ratingArray, setRatingArray] = useState<ReactNode[]>(
    new Array(5).fill(<></>)
  );

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: ReactNode, i: number) => {
      return (
        <span
          className={cn(styles["star"], {
            [styles["filled"]]: i < currentRating,
            [styles["editable"]]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
          tabIndex={isEditable ? 0 : -1}
          key={i}
        >
          <StarIcon
            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code !== "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div {...otherProps}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
