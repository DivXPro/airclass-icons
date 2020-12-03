// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EraserLineSvg from '@airclass/icons-svg/lib/asn/EraserLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EraserLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EraserLineSvg}></AntdIcon>;
};

EraserLine.displayName = 'EraserLine';
EraserLine.inheritAttrs = false;
export default EraserLine;