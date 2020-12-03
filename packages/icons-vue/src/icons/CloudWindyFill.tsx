// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CloudWindyFillSvg from '@airclass/icons-svg/lib/asn/CloudWindyFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloudWindyFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudWindyFillSvg}></AntdIcon>;
};

CloudWindyFill.displayName = 'CloudWindyFill';
CloudWindyFill.inheritAttrs = false;
export default CloudWindyFill;