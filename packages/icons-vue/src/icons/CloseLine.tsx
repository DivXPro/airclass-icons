// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CloseLineSvg from '@airclass/icons-svg/lib/asn/CloseLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseLineSvg}></AntdIcon>;
};

CloseLine.displayName = 'CloseLine';
CloseLine.inheritAttrs = false;
export default CloseLine;