// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InboxFillSvg from '@airclass/icons-svg/lib/asn/InboxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InboxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InboxFillSvg}></AntdIcon>;
};

InboxFill.displayName = 'InboxFill';
InboxFill.inheritAttrs = false;
export default InboxFill;