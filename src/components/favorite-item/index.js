import React from "react";
import * as S from "./styled";

const FavoriteItem = ({ avatar, name, userName, userUrl }) => {
  return (
    <S.Wrapper>
      <S.WrapperAvatar src={avatar} />
      <S.WrapperFullName>full name: {name}</S.WrapperFullName>
      <S.WrapperLink href={userUrl} target="_blank" rel="noreferrer">
        {userName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default FavoriteItem;
