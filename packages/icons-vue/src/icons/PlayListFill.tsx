// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlayListFillSvg from '@airclass/icons-svg/lib/asn/PlayListFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlayListFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayListFillSvg}></AntdIcon>;
};

PlayListFill.displayName = 'PlayListFill';
PlayListFill.inheritAttrs = false;
export default PlayListFill;