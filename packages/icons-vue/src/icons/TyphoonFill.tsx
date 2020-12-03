// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TyphoonFillSvg from '@airclass/icons-svg/lib/asn/TyphoonFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TyphoonFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TyphoonFillSvg}></AntdIcon>;
};

TyphoonFill.displayName = 'TyphoonFill';
TyphoonFill.inheritAttrs = false;
export default TyphoonFill;