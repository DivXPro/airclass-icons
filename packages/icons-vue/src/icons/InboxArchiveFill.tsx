// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InboxArchiveFillSvg from '@airclass/icons-svg/lib/asn/InboxArchiveFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InboxArchiveFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InboxArchiveFillSvg}></AntdIcon>;
};

InboxArchiveFill.displayName = 'InboxArchiveFill';
InboxArchiveFill.inheritAttrs = false;
export default InboxArchiveFill;