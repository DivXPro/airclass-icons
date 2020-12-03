// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EyeLineSvg from '@airclass/icons-svg/lib/asn/EyeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EyeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeLineSvg}></AntdIcon>;
};

EyeLine.displayName = 'EyeLine';
EyeLine.inheritAttrs = false;
export default EyeLine;