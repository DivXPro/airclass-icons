// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlayListAddFillSvg from '@airclass/icons-svg/lib/asn/PlayListAddFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlayListAddFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlayListAddFillSvg}></AntdIcon>;
};

PlayListAddFill.displayName = 'PlayListAddFill';
PlayListAddFill.inheritAttrs = false;
export default PlayListAddFill;