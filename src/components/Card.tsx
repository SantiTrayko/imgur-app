import styled from "styled-components";

interface CardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const PostItemStyles = `

`;

const PostItemMedia = styled.div`
  height: 100%;
  display: block;
  margin-bottom: 10px;
  background-repeat: no-repeat;
  cursor: pointer;
  background-size: 145px;
  position: relative;
  color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
  background-color: #666171;
  transition: box-shadow 250ms;
  -webkit-transition: box-shadow 250ms;
`;

const PostItemContainer = styled.div`
  /* height: 233px; */
`;

const MediaContainer = styled.div`
  overflow: hidden;
  height: 100%;
  cursor: pointer;
  color: #fff;
  background-size: 145px;
  background-repeat: no-repeat;
  position: relative;
  background-color: #2e3035;
  -webkit-transition: box-shadow 250ms;
`;

const CardContainer = styled.div`
  border: 1px solid #3c3742;
  background-color: #383241;
  border-radius: 3px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardContent = styled.div`
  padding: 12px;
`;

const CardTitle = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  color: #f4eeff;
  `;

const CardDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 300;
  margin: 6px 0;
  color: #f4eeff;
`;

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
