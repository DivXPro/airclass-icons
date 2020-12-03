// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PsychotherapyLineSvg from '@airclass/icons-svg/lib/asn/PsychotherapyLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PsychotherapyLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PsychotherapyLineSvg}></AntdIcon>;
};

PsychotherapyLine.displayName = 'PsychotherapyLine';
PsychotherapyLine.inheritAttrs = false;
export default PsychotherapyLine;