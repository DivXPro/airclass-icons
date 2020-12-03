// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BugLineSvg from '@airclass/icons-svg/lib/asn/BugLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BugLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BugLineSvg}></AntdIcon>;
};

BugLine.displayName = 'BugLine';
BugLine.inheritAttrs = false;
export default BugLine;