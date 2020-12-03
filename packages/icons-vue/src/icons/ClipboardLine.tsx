// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ClipboardLineSvg from '@airclass/icons-svg/lib/asn/ClipboardLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClipboardLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClipboardLineSvg}></AntdIcon>;
};

ClipboardLine.displayName = 'ClipboardLine';
ClipboardLine.inheritAttrs = false;
export default ClipboardLine;