// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AndroidFillSvg from '@airclass/icons-svg/lib/asn/AndroidFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AndroidFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AndroidFillSvg}></AntdIcon>;
};

AndroidFill.displayName = 'AndroidFill';
AndroidFill.inheritAttrs = false;
export default AndroidFill;