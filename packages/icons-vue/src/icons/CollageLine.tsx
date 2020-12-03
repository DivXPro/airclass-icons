// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CollageLineSvg from '@airclass/icons-svg/lib/asn/CollageLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CollageLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CollageLineSvg}></AntdIcon>;
};

CollageLine.displayName = 'CollageLine';
CollageLine.inheritAttrs = false;
export default CollageLine;