import * as React from 'react'
import styled from 'styled-components/native'
import _ from 'lodash'
import {FontSizes, TextPresets, TextProps} from './text.props'
import {translate} from '../../i18n'

const Base = styled.Text<TextProps>`
  color: ${(props) => props.theme.colors.text};
  font-size: ${FontSizes.small}px;
`

const Title = styled(Base)<TextProps>`
  font-style: normal;
  font-weight: 600;
  font-size: ${FontSizes.large}px;
`

const ContentHeader = styled(Base)<TextProps>`
  font-style: normal;
  font-weight: 600;
  font-size: ${FontSizes.medium}px;
`

const Content = styled(Base)<TextProps>`
  font-style: normal;
  font-size: ${FontSizes.medium}px;
`

const Description = styled(Base)<TextProps>`
  font-style: normal;
  font-weight: normal;
`

const Message = styled(Description)<TextProps>`
  color: ${(props) => props.theme.colors.textLight};
`

const Small = styled(Description)<TextProps>`
  color: ${(props) => props.theme.colors.textLight};
  font-size: ${FontSizes.tiny}px;
`

/**
 * This component is a HOC over the built-in React Native Text.
 */
export const Text: React.FunctionComponent<TextProps> = (props: TextProps) => {
  const {
    append,
    children,
    noSpace,
    prepend,
    preset,
    text,
    tx,
    txOptions,
    ...rest
  } = props
  const i18nText = tx && translate(tx, txOptions)
  const content = i18nText || text || children
  // Remove unnecessary props before passing forward
  const noText = {
    tx: undefined,
    text: undefined,
    txOptions: undefined,
    children: undefined,
    append: undefined,
    prepend: undefined,
  }
  const prependProps = {...props, ...noText, ...prepend}
  const appendProps = {...props, ...noText, ...append}
  let TextComponent

  switch (preset) {
    case TextPresets.TITLE:
      TextComponent = Title
      break
    case TextPresets.CONTENT_HEADER:
      TextComponent = ContentHeader
      break
    case TextPresets.CONTENT:
      TextComponent = Content
      break
    case TextPresets.DESCRIPTION:
      TextComponent = Description
      break
    case TextPresets.MESSAGE:
      TextComponent = Message
      break
    case TextPresets.SMALL:
      TextComponent = Small
      break
    default:
      TextComponent = Base
  }

  const MainText = styled(TextComponent)`
    ${(scProps) => (scProps.bold ? `font-weight: bold` : '')};
    ${(scProps) => (scProps.bold500 ? `font-weight: 500` : '')};
    ${(scProps) => (scProps.bold200 ? `font-weight: 200` : '')};
    ${(scProps) => (scProps.center ? `text-align: center` : '')};
    ${(scProps) =>
      scProps.lineHeight ? `line-height: ${scProps.lineHeight}px` : ''};
    ${(scProps) =>
      scProps.onPress ? `color: ${scProps.theme.colors.primary}` : ''};
    ${(scProps) =>
      scProps.color ? `color: ${scProps.theme.colors[scProps.color]}` : ''};
    ${(scProps) =>
      scProps.size
        ? FontSizes.hasOwnProperty(scProps.size) && !_.isNumber(scProps.size)
          ? `font-size: ${FontSizes[scProps.size]}px`
          : _.isNumber(scProps.size)
          ? `font-size: ${scProps.size}px`
          : ''
        : ''};
    ${(scProps) => (scProps.upperCase ? `text-transform: uppercase` : '')};
    ${(scProps) => (scProps.lowerCase ? `text-transform: lowercase` : '')};
    ${(scProps) =>
      scProps.paddingLeft ? `padding-left: ${scProps.paddingLeft}px` : ''};
    ${(scProps) =>
      scProps.disabled ? `color: ${scProps.theme.colors.textLight}` : ''};
    ${(scProps) => (scProps.noBold ? `font-weight: normal` : '')};
    font-family: ${(scProps) =>
      scProps.fontMontserrat ? 'Montserrat-Regular' : 'Roboto-Regular'};
    ${(scProps) =>
      scProps.fontBebasNeue ? `font-family: BebasNeue-Regular` : ''}
    ${(scProps) =>
      scProps.montserratSemiBold ? `font-family: Montserrat-SemiBold` : ''}
    ${(scProps) =>
      scProps.fontLightMontserrat ? `font-family: Montserrat-LightItalic` : ''}
  `

  return (
    <MainText {...rest} onPress={!rest.disabled ? rest.onPress : undefined}>
      {!!prepend ? <Text {...prependProps} /> : undefined}
      {!!prepend && !noSpace && ' '}
      {content}
      {!!append && !noSpace && ' '}
      {!!append ? <Text {...appendProps} /> : undefined}
    </MainText>
  )
}
