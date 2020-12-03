// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CloudyFillSvg from '@airclass/icons-svg/lib/asn/CloudyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloudyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudyFillSvg}></AntdIcon>;
};

CloudyFill.displayName = 'CloudyFill';
CloudyFill.inheritAttrs = false;
export default CloudyFill;