<form onSubmit={this.onSubmit}>
<input
name="email"
value={email}
onChange={this.onChange}
type="text"
placeholder="Email Address"
/>
<input
name="password"
value={password}
onChange={this.onChange}
type="password"
placeholder="Password"
/>
<button disabled={isInvalid} type="submit">
Sign In
</button>
{error && <p>{error.message}</p>}
</form>
