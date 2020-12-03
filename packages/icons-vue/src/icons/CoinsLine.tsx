// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CoinsLineSvg from '@airclass/icons-svg/lib/asn/CoinsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CoinsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoinsLineSvg}></AntdIcon>;
};

CoinsLine.displayName = 'CoinsLine';
CoinsLine.inheritAttrs = false;
export default CoinsLine;