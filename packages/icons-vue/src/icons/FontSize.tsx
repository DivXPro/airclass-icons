// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FontSizeSvg from '@airclass/icons-svg/lib/asn/FontSize';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FontSize = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FontSizeSvg}></AntdIcon>;
};

FontSize.displayName = 'FontSize';
FontSize.inheritAttrs = false;
export default FontSize;