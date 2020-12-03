// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AlignLeftSvg from '@airclass/icons-svg/lib/asn/AlignLeft';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlignLeft = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignLeftSvg}></AntdIcon>;
};

AlignLeft.displayName = 'AlignLeft';
AlignLeft.inheritAttrs = false;
export default AlignLeft;