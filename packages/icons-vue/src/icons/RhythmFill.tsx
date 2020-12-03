// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RhythmFillSvg from '@airclass/icons-svg/lib/asn/RhythmFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RhythmFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RhythmFillSvg}></AntdIcon>;
};

RhythmFill.displayName = 'RhythmFill';
RhythmFill.inheritAttrs = false;
export default RhythmFill;