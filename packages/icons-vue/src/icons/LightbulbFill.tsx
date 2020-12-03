// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LightbulbFillSvg from '@airclass/icons-svg/lib/asn/LightbulbFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LightbulbFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LightbulbFillSvg}></AntdIcon>;
};

LightbulbFill.displayName = 'LightbulbFill';
LightbulbFill.inheritAttrs = false;
export default LightbulbFill;