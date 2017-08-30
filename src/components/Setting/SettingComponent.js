import styled from 'styled-components'

const SettingComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 5px 0;
  box-sizing: border-box;
  text-align: right;

  @media (min-width: 992px) {
    align-items: flex-end;
    width: 30%;
  }
`

export default SettingComponent
