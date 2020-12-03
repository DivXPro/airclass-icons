// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EyeOffLineSvg from '@airclass/icons-svg/lib/asn/EyeOffLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EyeOffLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EyeOffLineSvg}></AntdIcon>;
};

EyeOffLine.displayName = 'EyeOffLine';
EyeOffLine.inheritAttrs = false;
export default EyeOffLine;