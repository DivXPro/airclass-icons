// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AlignCenterSvg from '@airclass/icons-svg/lib/asn/AlignCenter';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlignCenter = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignCenterSvg}></AntdIcon>;
};

AlignCenter.displayName = 'AlignCenter';
AlignCenter.inheritAttrs = false;
export default AlignCenter;