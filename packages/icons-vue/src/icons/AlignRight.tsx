// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AlignRightSvg from '@airclass/icons-svg/lib/asn/AlignRight';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlignRight = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignRightSvg}></AntdIcon>;
};

AlignRight.displayName = 'AlignRight';
AlignRight.inheritAttrs = false;
export default AlignRight;