// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FirefoxLineSvg from '@airclass/icons-svg/lib/asn/FirefoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FirefoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FirefoxLineSvg}></AntdIcon>;
};

FirefoxLine.displayName = 'FirefoxLine';
FirefoxLine.inheritAttrs = false;
export default FirefoxLine;