// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BookletFillSvg from '@airclass/icons-svg/lib/asn/BookletFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookletFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookletFillSvg}></AntdIcon>;
};

BookletFill.displayName = 'BookletFill';
BookletFill.inheritAttrs = false;
export default BookletFill;