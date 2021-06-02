import styled from 'styled-components'

const FooterStyled = styled.footer`
  max-width: ${({ theme }) => theme.maxWidth }px;
  font-size: ${({ theme }) => theme.font.body}rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
  font-variant: small-caps;
  margin: 0 auto 20px auto;
`

const Footer = () => {
  const author = "Eduardo Amador Lucas"
  const at = "@edualuc"
  const linkGithub = "https://github.com/edualuc"
  return (
    <FooterStyled>
      Desenvolvido por {' '}
      <a target="_blank" href={linkGithub}>{author} {at}</a>
    </FooterStyled>
  )
}
export default Footer