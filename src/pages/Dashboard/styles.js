import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-grey-4);
  border-bottom: 1px solid var(--color-grey-3);
`;

export const Container = styled.div`
  width: 80%;

  @media screen and (min-width: 425px) {
    width: 70%;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    cursor: pointer;
  }

  button {
    width: 4.218rem;
    height: 2.507rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    background-color: var(--color-grey-3);
    border-radius: 4px;

    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    color: var(--color-grey-0);

    cursor: pointer;

    transition: 0.4s;
  }

  button:hover {
    background-color: var(--color-grey-2);
  }
`;

export const StyledMain = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--color-grey-4);

  img {
    margin-top: 10rem;
    margin-bottom: 2.5rem;
  }
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: 7.375rem;

  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--color-grey-3);

  div {
    width: 80%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    @media screen and (min-width: 425px) {
      width: 70%;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: var(--color-grey-0);
    }

    p {
      width: 10rem;

      display: flex;
      justify-content: flex-end;

      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      color: var(--color-grey-1);

      @media screen and (min-width: 600px) {
        width: 15rem;
      }
    }
  }
`;

export const ContainerModules = styled.div`
  width: 100%;
  height: 20rem;

  display: flex;
  justify-content: center;

  div {
    width: 80%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media screen and (min-width: 425px) {
      width: 70%;
    }

    h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: var(--color-grey-0);

      margin-bottom: 2rem;
    }

    h3 {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: var(--color-grey-0);
    }
  }
`;
