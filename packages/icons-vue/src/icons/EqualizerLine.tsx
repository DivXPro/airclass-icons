// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EqualizerLineSvg from '@airclass/icons-svg/lib/asn/EqualizerLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EqualizerLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EqualizerLineSvg}></AntdIcon>;
};

EqualizerLine.displayName = 'EqualizerLine';
EqualizerLine.inheritAttrs = false;
export default EqualizerLine;