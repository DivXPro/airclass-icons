// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ClipboardFillSvg from '@airclass/icons-svg/lib/asn/ClipboardFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClipboardFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardFillSvg}></AntdIcon>;
};

ClipboardFill.displayName = 'ClipboardFill';
ClipboardFill.inheritAttrs = false;
export default ClipboardFill;