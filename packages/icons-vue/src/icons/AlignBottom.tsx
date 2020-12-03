// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AlignBottomSvg from '@airclass/icons-svg/lib/asn/AlignBottom';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlignBottom = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignBottomSvg}></AntdIcon>;
};

AlignBottom.displayName = 'AlignBottom';
AlignBottom.inheritAttrs = false;
export default AlignBottom;