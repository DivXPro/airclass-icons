// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FontColorSvg from '@airclass/icons-svg/lib/asn/FontColor';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FontColor = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FontColorSvg}></AntdIcon>;
};

FontColor.displayName = 'FontColor';
FontColor.inheritAttrs = false;
export default FontColor;