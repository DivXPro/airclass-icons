// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AmazonLineSvg from '@airclass/icons-svg/lib/asn/AmazonLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AmazonLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AmazonLineSvg}></AntdIcon>;
};

AmazonLine.displayName = 'AmazonLine';
AmazonLine.inheritAttrs = false;
export default AmazonLine;