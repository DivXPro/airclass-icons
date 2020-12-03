// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InboxUnarchiveFillSvg from '@airclass/icons-svg/lib/asn/InboxUnarchiveFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InboxUnarchiveFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InboxUnarchiveFillSvg}></AntdIcon>;
};

InboxUnarchiveFill.displayName = 'InboxUnarchiveFill';
InboxUnarchiveFill.inheritAttrs = false;
export default InboxUnarchiveFill;