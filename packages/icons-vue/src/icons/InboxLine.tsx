// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InboxLineSvg from '@airclass/icons-svg/lib/asn/InboxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InboxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InboxLineSvg}></AntdIcon>;
};

InboxLine.displayName = 'InboxLine';
InboxLine.inheritAttrs = false;
export default InboxLine;