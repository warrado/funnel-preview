# Final notes

Well, the task was fun, and it works (at least to a degree). Thanks for that!
This document contains some final thoughts on the implementation, timing, etc.

## Design

The app is fairly simple, and straightforward, so we didn't need much fancy stuff -
I didn't feel the need to use anu hooks besides `useState` and `useRef`. The component
tree isn't very deep either, and so simple state elevation was sufficient for this
project, and no reducers were needed.

## Timing

Unfortunately my time to work on this was waaaay more fragmented than I'd like :(
Because of that I don't have proper git history (once I got to work on it, I just
focused on getting as much as possible done instead of good practice). Hope that's
not to big of an issue.

That said, I'd like to offer you my honest "estimate" of how much time I've spend
on the task:
* I think the components and business logic took me approx. 3-4h. - I had some problems
with the packages I originally chose for JSON schema and carousel/slider, and had
to switch them for another ones (couldn't get them to work properly :( )
* Styling is not my strong suit, and I struggled quite a bit (Claude knows quite a bit
bout Tailwind though 😅). Still, I think it took me approx. 2h to style everything top to bottom
* The tests took approx 1h to write - I had some issues with `lucide-react` that
ultimately made me skip testing some parts of the system. 

So, in all honesty, it took me almost a full day to get this done. I'll leave it
to you to decide if that's a lot of not.

## Improvements to be made

### Testing

I didn't follow TDD principles in this, and it shows.
Generally I think waaaay more tests could be added, as most of them are just
rendering/snapshot tests.

One thing that bothers me a lot is the lack of tests for the component factory -
this is caused by some weirdness with `lucide-react` that I don't have the time
investigating atm :(
(It shows though, that this file is not doing well with SRP, and mixing some
visual/UI concerns with buisness logic, so most likely a good subject for 
refactoring).

### Schema validation

JSON schema is awesome (despite still technically being a 'draft'), and we could
use is more for easy validation.

The problem I see is: I haven't found a good package that would auto-generate
types for TS from schema, so there's some code duplication.

It's possible package like that is there, but I'm not aware of it.

### General

I'm not super-happy with the code structure tbh - I feel I've mixed up the
UI with buisness logic a bit, which results in e.g. lower testability.

As an example, I'd love to write a test for the `FilePicker` "upload" handling,
but that would require meddling with the internals of `react-drag-drop-files`,
which I don't think is sustainable.

I'm gonna have to spend some time thinking about how to properly handle this
kind of stuff.
