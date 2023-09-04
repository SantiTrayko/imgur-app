import { CardContainer, CardContent, CardDescription, CardTitle, MediaContainer, PostItemMedia } from "./CardStyled";

interface CardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <CardContainer>
      <PostItemMedia>
        <MediaContainer>{children}</MediaContainer>
      </PostItemMedia>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
