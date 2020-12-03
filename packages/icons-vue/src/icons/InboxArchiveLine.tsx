// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InboxArchiveLineSvg from '@airclass/icons-svg/lib/asn/InboxArchiveLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InboxArchiveLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InboxArchiveLineSvg}></AntdIcon>;
};

InboxArchiveLine.displayName = 'InboxArchiveLine';
InboxArchiveLine.inheritAttrs = false;
export default InboxArchiveLine;