// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CloudOffLineSvg from '@airclass/icons-svg/lib/asn/CloudOffLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloudOffLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudOffLineSvg}></AntdIcon>;
};

CloudOffLine.displayName = 'CloudOffLine';
CloudOffLine.inheritAttrs = false;
export default CloudOffLine;