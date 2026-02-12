import { Star } from "lucide-react";
import type { FC } from "react";

interface StarRatingProps {
  rating: number;
  colorClass: string;
}

const StarRating: FC<StarRatingProps> = ({ rating, colorClass }) => {
  return (
    <div className="flex gap-0.5 shrink-0">
      {[1, 2, 3].map((star) => (
        <Star
          key={star}
          size={11}
          className={`${
            star <= rating
              ? `${colorClass} fill-current`
              : "text-zinc-200 dark:text-zinc-700"
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;
