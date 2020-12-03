// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CloudOffFillSvg from '@airclass/icons-svg/lib/asn/CloudOffFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloudOffFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudOffFillSvg}></AntdIcon>;
};

CloudOffFill.displayName = 'CloudOffFill';
CloudOffFill.inheritAttrs = false;
export default CloudOffFill;