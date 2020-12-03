// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StickyNoteLineSvg from '@airclass/icons-svg/lib/asn/StickyNoteLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StickyNoteLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StickyNoteLineSvg}></AntdIcon>;
};

StickyNoteLine.displayName = 'StickyNoteLine';
StickyNoteLine.inheritAttrs = false;
export default StickyNoteLine;