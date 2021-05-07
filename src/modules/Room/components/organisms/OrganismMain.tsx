import styled, {StyledComponent} from 'styled-components';

interface OrganismMainProps {
    full: boolean
}

export const OrganismsMain: StyledComponent<any, any> = styled.main`
  flex: 1;
  position: relative;
  margin-left: ${(props: OrganismMainProps) => (props.full ? '0' : '280px')};
  height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props: OrganismMainProps) => (props.full ? '#16202c' : 'black')};
  @media screen and (max-width: 936px) {
    margin-left: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: inherit;
  }
`;
