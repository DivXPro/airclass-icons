// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TelegramLineSvg from '@airclass/icons-svg/lib/asn/TelegramLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TelegramLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TelegramLineSvg}></AntdIcon>;
};

TelegramLine.displayName = 'TelegramLine';
TelegramLine.inheritAttrs = false;
export default TelegramLine;