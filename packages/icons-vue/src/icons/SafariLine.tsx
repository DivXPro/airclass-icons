// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SafariLineSvg from '@airclass/icons-svg/lib/asn/SafariLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SafariLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SafariLineSvg}></AntdIcon>;
};

SafariLine.displayName = 'SafariLine';
SafariLine.inheritAttrs = false;
export default SafariLine;