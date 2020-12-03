import { generate, getSecondaryColor, isIconDefinition, warning, useInsertStyles } from '../utils';
import { AbstractNode, IconDefinition } from '@airclass/icons-svg/lib/types';
import { CSSProperties, SetupContext } from 'vue';

export interface IconProps {
  icon: IconDefinition;
  class?: string;
  onClick?: Function;
  style?: CSSProperties;
  primaryColor?: string; // only for two-tone
  secondaryColor?: string; // only for two-tone
  focusable?: string;
}

export interface TwoToneColorPaletteSetter {
  primaryColor: string;
  secondaryColor?: string;
}

export interface TwoToneColorPalette extends TwoToneColorPaletteSetter {
  calculated?: boolean; // marker for calculation
}

const twoToneColorPalette: TwoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false,
};

function setTwoToneColors({ primaryColor, secondaryColor }: TwoToneColorPaletteSetter) {
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors(): TwoToneColorPalette {
  return {
    ...twoToneColorPalette,
  };
}

const IconBase = (props: IconProps, context: SetupContext) => {
  const { icon, primaryColor, secondaryColor, ...restProps } = {
    ...props,
    ...context.attrs,
  } as any;

  let colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor),
    };
  }

  useInsertStyles();

  warning(isIconDefinition(icon), `icon should be icon definiton, but got ${icon}`);

  if (!isIconDefinition(icon)) {
    return null;
  }

  let target = icon;
  if (target && typeof target.icon === 'function') {
    target = {
      ...target,
      icon: target.icon(colors.primaryColor, colors.secondaryColor),
    };
  }

  return generate(target.icon as AbstractNode, `svg-${target.name}`, {
    ...restProps,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true',
  });
  // },
};

IconBase.inheritAttrs = false;
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;

export default IconBase;
