// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InboxUnarchiveLineSvg from '@airclass/icons-svg/lib/asn/InboxUnarchiveLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InboxUnarchiveLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InboxUnarchiveLineSvg}></AntdIcon>;
};

InboxUnarchiveLine.displayName = 'InboxUnarchiveLine';
InboxUnarchiveLine.inheritAttrs = false;
export default InboxUnarchiveLine;