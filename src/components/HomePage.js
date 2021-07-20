import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function HomePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  return (
    <PageContainer className="jumbotron">
      <h1>Wikipedia API Demonstration</h1>
      <p>To start, type a word or phrase and click Search.</p>
      <SearchContainer>
        <StyledInput></StyledInput>
        <StyledLink to="about" className="btn btn-primary">
          Search
        </StyledLink>
      </SearchContainer>
      <ContentDiv>
        <h1>{title}</h1>
        <img src={imageSrc} alt=""></img>
        <p>{content}</p>
      </ContentDiv>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  margin-top: 25px;
`;

const SearchContainer = styled.div``;

const StyledInput = styled.input`
  margin-right: 5px;
  height: 40px;
`;

const StyledLink = styled(Link)`
  margin-top: -5px;
`;

const ContentDiv = styled.div`
  align-items: center;
  text-align: center;
`;

export default HomePage;
